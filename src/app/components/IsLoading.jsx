const IsLoading = ({
  isLoaded,
  children,
  componetLoader: componentLoader = <h1>Loading...</h1>,
}) => {
  return <>{!isLoaded ? componentLoader : children}</>;
};

export default IsLoading;
