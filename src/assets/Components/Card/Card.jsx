
const Card = ({user}) => {
    const {name,email,photo,profession}=user;
    return (
        <div>


<div className="flex flex-col justify-center w-72 p-6 shadow-md rounded-xl sm:px-12 bg-[#9DB2BF]">
	<img src={photo} alt="" className="w-48 h-44 mx-auto  dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-400">{profession}</p>
		</div>
	
	</div>
</div>
</div>

            
    );
};

export default Card;