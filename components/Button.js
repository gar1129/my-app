export default function Button({children, className}){
    return (
        <button className={`h-10 w-auto text-white text-center rounded-md bg-blue-700 px-3 py-1 ${className}`}>
            {children}
        </button>
    )
}