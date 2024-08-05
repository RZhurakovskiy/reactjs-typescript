
interface ErrorMEssageProps {
    error: string
}

const Loader = ({error}:ErrorMEssageProps) => {


    return (
        <p className="text-center">{error}</p>
    );
  };
  
  export default Loader;