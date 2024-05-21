import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function Authentication() {
    const styles = {
        backgroundImage: "url(https://images.template.net/93771/green-and-white-wallpaper-edit-online.jpg)",
        backgroundSize: 'cover', // This ensures the image covers the entire area
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Set a minimum height to cover the entire viewport
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
      };
    return (
        <div style={styles}>
            {/* <Navigation /> */}
            <Outlet />
        </div>
    );
}
