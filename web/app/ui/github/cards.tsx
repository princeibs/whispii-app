export function DashboardNumbersCard({
  message,
  value,
  color,
}: {
  message: string;
  value: string;
  color: string;
}) {
  return (
    <div
      className={`rounded h-[200px] w-[250px] flex justify-center items-center flex-col ${color}`}
    >
      <p className="">{message}</p>
      <p className="mt-5 font-mono text-5xl">{value}</p>
    </div>
  );
}
