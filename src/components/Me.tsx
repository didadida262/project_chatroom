import cn from 'classnames'
import buddy from '@/assets/images/buddy.svg'

export default function Me() {
    return <div className={cn(
        "Me w-[300px] h-[300px] z-[100] overflow-hidden shadow-[0px_5px_12px_2px_rgba(17,17,17,0.5)]", 
        "border-[1px] border-solid border-[#ffffff26]",
        'hover:border-white hover:cursor-pointer',
        'fixed bottom-2 left-2',
        'duration-200',
        "bg-cover bg-center bg-[url('" + buddy + "')]"
        )}
        >

 
    </div>
}