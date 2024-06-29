import Card from "@/components/card";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div className="size-full p-8 bg-slate-800">
                <Card
                    percent={39}
                    colorClass="bg-blue-500"
                    borderColorClass="border-blue-500"
                    title="This Week's Build Effect"
                    rightTitle="Your Effort index for this week"
                    rightContent="Contribute high-quality code to increase your Effort index."
                    points={[{percent: 70, num: 34}, {percent: 90, num: 24}]}
                />
                <hr className="border-t border-gray-500 my-4"/>
                <Card
                    percent={83}
                    colorClass="bg-blue-500"
                    borderColorClass="border-blue-500"
                    title="This Week's Build Quality"
                    rightTitle="Your Quality index for this week"
                    rightContent="Improve your code quality to increase your Quality index."
                    points={[{percent: 70, num: 34}, {percent: 90, num: 24}]}
                />
                <hr className="border-t border-gray-500 my-4"/>
                <Card
                    percent={60}
                    colorClass="bg-yellow-500"
                    borderColorClass="border-yellow-500"
                    title="This Week's Build Impact"
                    rightTitle="Your Impact index for this week"
                    rightContent="Increase your code's impact to increase your Impact index."
                    points={[{percent: 50, num: 24}, {percent: 90, num: 24}]}
                />
            </div>
        </main>
    );
}
