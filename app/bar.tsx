import {cn} from "@/lib/utils";

interface BarProps {
    rate: number,
    colorClass: string,
    title: string,
    rightTitle: string,
    rightContent: string,
}

export default function Bar(props: BarProps) {
    let rate_hundred = props.rate * 100

    return (
        <div className="w-full bg-slate-800 h-52 flex items-center justify-start gap-16 text-white">
            <div className="w-[70%] h-full">
                <div className="text-lg font-bold">
                    {props.title}
                </div>
                <div className="size-full flex justify-start items-center relative">
                    <div className="w-full bg-slate-700 h-3 rounded-full relative border-2 border-gray-500">
                        <div className="w-full h-5 absolute top-1/2 -translate-y-1/2 flex items-center justify-start">
                            <div className={cn(
                                props.colorClass,
                                "h-3 rounded-full")}
                                 style={{width: `${rate_hundred}%`}}></div>
                            <div className="size-5 bg-slate-700 -ml-3 rounded-full border-[3px] border-white relative">
                                <div className="absolute -top-12 left-1 flex flex-col items-start">
                                    <div>{rate_hundred}</div>
                                    <div>|</div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="size-5 absolute left-[50%] top-1/2 -translate-y-1/2 bg-slate-700 -ml-3 rounded-full border-[3px] border-white">
                            <div className="absolute top-[14px] left-1 flex flex-col items-start w-24">
                                <div>|</div>
                                <div>Top 50%: 24</div>
                            </div>
                        </div>
                        <div
                            className="size-5 absolute left-[90%] top-1/2 -translate-y-1/2 bg-slate-700 -ml-3 rounded-full border-[3px] border-white">
                            <div className="absolute top-[14px] left-1 flex flex-col items-start w-24">
                                <div>|</div>
                                <div>Top 90%: 24</div>
                            </div>
                        </div>
                    </div>
                </div>
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