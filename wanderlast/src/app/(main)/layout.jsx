import NavBar from "@/app/components/shared/NavBar";

export default function MainLayout({ children }) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}