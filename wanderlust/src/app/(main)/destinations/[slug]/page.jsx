import DetailsCard from "@/app/components/destinations/DetailsCard";
import CardSkeleton from "@/app/components/ui/CardSkeleton";
import { Suspense } from "react";

const DestnationDetails = async ({ params }) => {
    let { slug } = await params;

    return (
        <div className="w-full max-w-5xl mx-auto p-5 py-10">
            <Suspense fallback={<CardSkeleton />}>
                <DetailsCard slug={slug} />
            </Suspense>
        </div>
    );
};

export default DestnationDetails;