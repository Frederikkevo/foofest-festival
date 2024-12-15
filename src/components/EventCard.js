
export default function EventCard({ act, stage, time }) {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h3 className="text-lg font-bold">{act}</h3>
      <p>Stage: {stage}</p>
      <p>Time: {time}</p>
    </div>
  );
}
