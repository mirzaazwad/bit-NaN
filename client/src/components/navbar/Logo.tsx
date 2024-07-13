interface ILogoProps {
    size: number;
}

const Logo= ({ size }:ILogoProps) => {
    return (
        <img src="/Bit.png" alt="logo" width={size} height={size} className="rounded-full" />
    );
};

export default Logo;
