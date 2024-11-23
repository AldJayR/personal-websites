export const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

// Nav items animation variants
export const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

// Mobile menu animation variants
export const mobileMenuVariants = {
    hidden: { 
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    },
    visible: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            staggerChildren: 0.05
        }
    }
};

// Background animation variants
export const backgroundVariants = {
    transparent: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        backdropFilter: "blur(0px)",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
    },
    solid: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
    }
};