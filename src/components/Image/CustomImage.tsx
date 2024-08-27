import { IURLBasedImageProps } from '@/utils/interfaces';
import Image from 'next/image';
import React from 'react';

const URLBasedImage = ({ imageUrl }: IURLBasedImageProps) => {
	return (
		<div className="mt-6 w-full flex justify-center items-center">
			<div className="flex items-center w-48 border-2">
				<Image
					src={imageUrl}
					alt="External Image"
					unoptimized
					width={200}
					height={200}
				/>
			</div>
		</div>
	);
};

export default URLBasedImage;
