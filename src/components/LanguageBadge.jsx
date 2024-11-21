/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { languageData } from '../assets/data/languageData';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const getLanguageData = (language) => {
    return languageData[language] || { icon: faCode, color: '#333', bgColor: '#E0E0E0' };
};

const LanguageBadge = ({ language }) => {
    const { icon, color, bgColor } = getLanguageData(language);

    return (
        <div
            className="flex items-center rounded-full px-3 py-1 text-sm"
            style={{ backgroundColor: bgColor }}
        >
            <FontAwesomeIcon
                icon={icon}
                className="mr-2"
                style={{ color: color }}
            />
            <span className='text-white'>
            {language}
            </span>
            
        </div>
    );
};

export default LanguageBadge;
