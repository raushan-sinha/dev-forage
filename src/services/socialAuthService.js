
export const sendUserToBackend = async (user, provider) => {
    const res = await fetch(
        `http://localhost:5000/api/social-auth/${provider}-login`,
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                provider,
                providerId: user.uid,
                name: user.displayName,
                email: user.email,
                avatar: user.photoURL
            })
        }
    );

    const data = await res.json();

    return data;
};
