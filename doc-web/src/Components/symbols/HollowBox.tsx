export default function HollowBoxSymbol(props: any) {
  return (
    <h1 className="text-[18px] ">
      <span className="mr-3 text-[13px]">□</span>
      {props.title}
    </h1>
  );
}
