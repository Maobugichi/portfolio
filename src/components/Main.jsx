import PropTypes from "prop-types";

const Main = ({children}) => {
    return(
        <main className="h-auto min-h-[90vh] lg:min-h-[100vh] flex flex-col justify-center w-full ">
            {children}
        </main>
    )
}

Main.propTypes = {
  children: PropTypes.ReactNode,
};

export default Main