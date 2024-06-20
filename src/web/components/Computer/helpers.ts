
type CoinAnimationType = {
    coin: {
        src: string;
        top?: string;
        left?: string;
        width?: string;
        right?: string;
        bottom?: string;
    },
    animationFrameRef: React.MutableRefObject<number | null>,
    e: MouseEvent
}
export const getCoinAnimation = ({ coin, animationFrameRef, e }: CoinAnimationType) => {
    const { left, top, right, bottom } = coin;
    const elementXPercent =
        left !== undefined
            ? parseFloat(left)
            : right !== undefined
                ? 100 - parseFloat(right)
                : 50;
    const elementYPercent =
        top !== undefined
            ? parseFloat(top)
            : bottom !== undefined
                ? 100 - parseFloat(bottom)
                : 50;

    const elementX = (elementXPercent / 100) * window.innerWidth;
    const elementY = (elementYPercent / 100) * window.innerHeight;

    const distanceX = e.clientX - elementX;
    const distanceY = e.clientY - elementY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    const maxDistance = 1300;

    if (distance > maxDistance) {
        animationFrameRef.current = null;
        return { left, top, right, bottom };
    }

    const attractionForce = (maxDistance - distance) / 10000;

    const newLeft =
        left !== undefined
            ? elementXPercent +
            (distanceX / window.innerWidth) * 100 * attractionForce
            : undefined;
    const newTop =
        top !== undefined
            ? elementYPercent +
            (distanceY / window.innerHeight) * 100 * attractionForce
            : undefined;
    const newRight =
        right !== undefined
            ? 100 -
            (elementXPercent +
                (distanceX / window.innerWidth) * 100 * attractionForce)
            : undefined;
    const newBottom =
        bottom !== undefined
            ? 100 -
            (elementYPercent +
                (distanceY / window.innerHeight) * 100 * attractionForce)
            : undefined;

    animationFrameRef.current = null;
    return {
        left: newLeft !== undefined ? `${newLeft}%` : undefined,
        top: newTop !== undefined ? `${newTop}%` : undefined,
        right: newRight !== undefined ? `${newRight}%` : undefined,
        bottom: newBottom !== undefined ? `${newBottom}%` : undefined,
    };
}

type RocketAnimationType = {
    rect?: DOMRect,
    e: MouseEvent,
    animationFrameRef: React.MutableRefObject<number | null>
}

export const getRocketAnimation = ({ rect, e, animationFrameRef }: RocketAnimationType) => {
    if (!rect) {
        animationFrameRef.current = null;
        return { maskSize: "100%", transform: "translate(-50%, -47%)" };
    }

    const containerCenterX = rect.left + rect.width / 2;
    const containerCenterY = rect.top + rect.height / 2;

    const distanceX = e.clientX - containerCenterX;
    const distanceY = e.clientY - containerCenterY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    const maxDistance = 300; // Distance beyond which mask size should not change
    const minMaskSize = 157; // Minimum mask size percentage
    const maxMaskSize = 180; // Maximum mask size percentage
    const minRocketTranslation = 47; // Minimum rocket Y translation
    const maxRocketTranslation = 62; // Maximum rocket Y translation

    if (distance > maxDistance) {
        animationFrameRef.current = null;
        return {
            maskSize: `${minMaskSize}%`,
            transform: `translate(-50%, -${minRocketTranslation}%)`,
        };
    }

    // Calculate mask size proportionally
    const size =
        maxMaskSize - (distance / maxDistance) * (maxMaskSize - minMaskSize);
    const translation =
        maxMaskSize -
        (distance / maxDistance) *
        (maxRocketTranslation - minRocketTranslation);

    animationFrameRef.current = null;
    return {
        transform: `translate(-50%, -${Math.min(
            Math.max(translation, minRocketTranslation),
            maxRocketTranslation
        )}%)`,
        maskSize: `${Math.min(Math.max(size, minMaskSize), maxMaskSize)}%`,
    };
}