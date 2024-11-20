/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ServiceCard = ({ service, description, icon, icons }) => {
    const getIconColor = (icon) => {
        const iconName = icon.iconName;
        switch (iconName) {
            case 'html5':
                return 'text-[#E34F26]';
            case 'css3-alt':
                return 'text-[#264DE4]';
            case 'js':
                return 'text-[#F7DF1E]';
            case 'react':
                return 'text-[#61DAFB]';
            case 'java':
                return 'text-[#007396]';
            case 'python':
                return 'text-[#3776AB]';
            default:
                return 'text-gray-700';
        }
    };

    const getServiceColor = (service) => {
        if (service.includes('HTML')) return 'bg-gradient-to-r from-[#E34F26] via-[#264DE4] to-[#F7DF1E] text-transparent bg-clip-text';
        if (service.includes('React')) return 'text-[#61DAFB]';
        if (service.includes('Tailwind')) return 'text-[#38BDF8]';
        if (service.includes('Java')) return 'text-[#007396]';
        if (service.includes('C/C++')) return 'text-[#00599C]';
        if (service.includes('Python')) return 'text-[#3776AB]';
        return 'text-gray-700';
    };


    return (
        <div className="p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center bg-white/30 backdrop-blur-md w-[250px] max-w-[350px] mx-auto h-56 md:h-auto">
            <h3 className={`text-2xl font-poppins font-bold mb-2 ${getServiceColor(typeof service === 'string' ? service : 'default')}`}>
                {service}
            </h3>
            {icons ? (
                <div className="flex justify-center gap-4 mb-4">
                    {icons.map((icon, index) => (
                        <FontAwesomeIcon 
                            key={index}
                            icon={icon}
                            className={`text-3xl ${getIconColor(icon)}`}
                        />
                    ))}
                </div>
            ) : (
                <FontAwesomeIcon icon={icon} className={`text-3xl ${getIconColor(icon)} mb-4`} />
            )}
                <p className="text-gray-600">{description}</p>
        </div>
    )
}