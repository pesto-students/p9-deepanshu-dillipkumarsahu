import Header from "./Header";
import Section from "./Section";


const BaseLayout = ({ children, title }) => (
    <div class="container">
        <Header title={title} />
        <Section>
            {children}
        </Section>
    </div>
)
export default BaseLayout;