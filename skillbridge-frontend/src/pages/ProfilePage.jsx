import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../redux/userSlice";
import styles from "../assets/Profile.module.sass";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUserProfile());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <div className={styles.profileWrapper}>
                <h2 className={styles.title}>User Information</h2>

                {loading && <p>Loading...</p>}
                {error && <p className={styles.error}>{error}</p>}

                {user && (
                    <div className={styles.userInfo}>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
