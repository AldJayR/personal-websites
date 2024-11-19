/* eslint-disable react/prop-types */

const Avatar = ({ img, name }) => {
    const avatarStyles = `
        shrink-0 bg-gradient-to-r from-cyan-500 to-blue-500 w-32 h-32
        rounded-xl cursor-pointer shadow-xl hover:shadow-indigo-500/40
        transition hover:ease-in hover:-translate-y-3 opacity-75 hover:opacity-100
    `;

    return (
        <div className="text-center m-4">
            <div className={avatarStyles}>
                <img
                    src={img}
                    alt={`${name}'s avatar`}
                    className="w-full h-full"
                />
            </div>

            <p className="text-white mt-2 font-roboto tracking-wider">{name}</p>
        </div>
    );
};

export default Avatar;
