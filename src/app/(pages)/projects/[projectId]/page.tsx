export default function ProjectById({
  params,
}: {
  params: { projectId: string };
}) {
  return (
    <>
      <p>projeto - {params.projectId}</p>
    </>
  );
}
