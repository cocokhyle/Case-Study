export default function URLs(props: any) {
  const isUrl = (text: string) => {
    try {
      new URL(text);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <h1 className="text-[16px] ">
      {isUrl(props.title) ? (
        <a
          href={props.title}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Click here
        </a>
      ) : (
        props.title
      )}
    </h1>
  );
}
