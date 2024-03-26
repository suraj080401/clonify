import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo.png";

const LeftSection: React.FC = ({}) => {
	return (
		<div className="w-[20%] bg-white h-screen flex flex-col p-4">
			<div>
				<Image src={Logo} alt="Logo" width={100} height={400} />
			</div>
		</div>
	);
};

export default LeftSection;
