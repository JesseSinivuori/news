export function ErrorMessage({ error }: { error?: string }) {
  return (
    <div className="flex w-full justify-center items-center">
      {error ? error : "Something went wrong."}
    </div>
  );
}
