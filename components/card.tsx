import Bar from "@/components/bar";

interface CardProps {
    percent: number,
    colorClass: string,
    borderColorClass: string,
    title: string,
    rightTitle: string,
    rightContent: string,
    points?: {
        percent: number,
        num: number,
    }[]
}

export default function Card(props: CardProps) {

    return (
        <div className="w-full bg-slate-800 h-52 flex items-center justify-start gap-16 text-white">
            <div className="w-[70%] h-full">
                <div className="text-lg font-bold">
                    {props.title}
                </div>
                <Bar
                    percent={props.percent}
                    colorClass={props.colorClass}
                    borderColorClass={props.borderColorClass}
                    points={props.points}
                />
            </div>
            <div className="h-full w-[30%] flex flex-col items-start justify-center">
                <div className="text-lg font-semibold">
                    {props.rightTitle}
                </div>
                <div>
                    {props.rightContent}
                </div>
            </div>
        </div>
    )
}