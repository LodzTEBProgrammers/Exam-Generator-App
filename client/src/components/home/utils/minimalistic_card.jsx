import Icon from "./icon";

const Info_card = ({ id, icon, title, description }) => {
    return (
        <>
            {id % 2 != 0 ? (
                <div className="flex justify-center items-center gap-2 p-3 h-[97px] bg-[--BackgroundSecond-DarkMode] rounded-2xl">
                    <Icon name={icon} color='#355ad4' size="48" />
                    <div className="flex flex-col gap-2 text-left">
                        <h4 className="font-bold text-[--Primary-DarkMode]">{title}</h4>
                        <p className="text-[--TextThird-DarkMode]">{description}</p>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center gap-2 p-3 h-[97px] bg-[--BackgroundSecond-DarkMode] rounded-2xl">
                    <Icon name={icon} color='#104f89' size="48" />
                    <div className="flex flex-col gap-2 text-left">
                        <h4 className="font-bold text-[--Secondary-DarkMode]">{title}</h4>
                        <p className="text-[--TextThird-DarkMode]">{description}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Info_card;