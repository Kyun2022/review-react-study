export const Layout = (props) => {
  return (
    <div className="flex justify-center flex-col px-2 mx-auto min-h-screen max-w-2xl ">
      {props.children}
    </div>
  );
};
