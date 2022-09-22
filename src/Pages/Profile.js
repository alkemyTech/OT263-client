import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { get } from "../Services/apiService";
import ProfileForm from "../Components/Profile/ProfileForm";

const Profile = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const { data } = await get(
                    `http://localhost:3001/users/auth/me`
                );
                setUser(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchdata();
    }, []);

	return (
		<Fade>
			<ProfileForm user={user} />
		</Fade>
	);
};

export default Profile;
