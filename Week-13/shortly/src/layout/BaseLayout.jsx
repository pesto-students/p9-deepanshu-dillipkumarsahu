import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";

// import Section from "../component/Section";
const BaseLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Section>{children}</Section>
            <Footer />
        </>
    )
}
export default BaseLayout;