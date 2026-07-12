export default function CommonButton({
    text, className
}: {
    text: string,
    className: string
}) {
    return (
        <button className={`
     ${className}
     
     text-white py-2.5 px-10 rounded-full font-bold text-[15px] transition-colors shadow-sm cursor-pointer
     `}
        >
            {text}
        </button>
    )

}