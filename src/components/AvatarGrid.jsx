/* eslint-disable react/prop-types */
import Avatar from '../components/Avatar';
import { motion } from 'motion/react';

const AvatarGrid = ({ avatars, chooseAvatar }) => (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {avatars.map((avatar, index) => (
            <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => chooseAvatar(avatar.name)}
                className="cursor-pointer"
            >
                <Avatar img={avatar.img} name={avatar.name} />
            </motion.div>
        ))}
    </div>
);

export default AvatarGrid;
