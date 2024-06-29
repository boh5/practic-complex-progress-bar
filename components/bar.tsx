"use client";

import {cn} from "@/lib/utils";
import {DndContext} from "@dnd-kit/core";


interface BarProps {
    percent: number,
    colorClass: string,
    borderColorClass: string,
    points?: {
        percent: number,
        num: number,
    }[]
}


export default function Bar(props: BarProps) {
    return (
        <DndContext>
            <div className="size-full flex justify-start items-center relative">
                <div className="w-full bg-slate-700 h-3 rounded-full relative border-2 border-gray-500">
                    <div className="w-full h-5 absolute top-1/2 -translate-y-1/2 flex items-center justify-start">
                        <div className={cn(
                            props.colorClass,
                            "h-3 rounded-full")}
                             style={{width: `${props.percent}%`}}></div>
                        <div className="size-5 bg-slate-700 -ml-3 rounded-full border-[3px] border-white relative">
                            <div className="absolute -top-12 left-1 flex flex-col items-start">
                                <div>{props.percent}</div>
                                <div>|</div>
                            </div>
                        </div>
                    </div>

                    {props.points?.map((point, index) => (
                        <div
                            key={index}
                            className={cn(
                                point.percent > props.percent ? props.borderColorClass : "border-white",
                                "size-5 absolute top-1/2 bg-slate-700 -translate-y-1/2 -ml-3 rounded-full border-[3px]"
                            )}
                            style={{left: `${point.percent}%`}}>
                            <div className="absolute top-[14px] left-1 flex flex-col items-start w-24">
                                <div>|</div>
                                <div>Top {(100 - point.percent)}%: {point.num}</div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </DndContext>
    )
}