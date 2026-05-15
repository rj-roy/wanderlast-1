import DesDForm from "@/app/components/DesDForm";
import { formSubmitAction } from "@/app/lib/actions";

const page = () => {
    return (
        <div>
            <DesDForm formSubmitAction={formSubmitAction} />
        </div>
    );
};

export default page;