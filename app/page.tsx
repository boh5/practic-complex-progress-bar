import Bar from "@/app/bar";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div className="size-full p-8 bg-slate-800">
                <Bar
                    rate={0.39}
                    colorClass="bg-blue-500"
                    title="This Week's Build Effect"
                    rightTitle="Your Effort index for this week"
                    rightContent="Contribute high-quality code to increase your Effort index."
                />
                <hr className="border-t border-gray-500 my-4"/>
                <Bar
                    rate={0.83}
                    colorClass="bg-blue-500"
                    title="This Week's Build Quality"
                    rightTitle="Your Quality index for this week"
                    rightContent="Improve your code quality to increase your Quality index."
                />
                <hr className="border-t border-gray-500 my-4"/>
                <Bar
                    rate={0.60}
                    colorClass="bg-yellow-500"
                    title="This Week's Build Impact"
                    rightTitle="Your Impact index for this week"
                    rightContent="Increase your code's impact to increase your Impact index."
                />
            </div>
        </main>
    );
}
