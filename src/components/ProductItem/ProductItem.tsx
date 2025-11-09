'use client'

import Image from 'next/image'
import Like from '../Like/Like'
import Delete from '../Delete/Delete'
import { useStore } from '@/src/stores/product-store';
import { ProductItemProps } from '@/src/interfaces';

const ProductItem = ({ character }: ProductItemProps ) => {
    const { toggleLike, removeProduct, favorites } = useStore();
    const isLiked = favorites.includes(character.id)

    const textMock = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo numquam nobis, facere omnis perspiciatis quae necessitatibus voluptatem magnam error, assumenda sapiente possimus veniam quidem quaerat suscipit. Voluptatibus, corrupti molestias!
    Labore architecto illum earum, perspiciatis in officiis minus maxime, accusamus necessitatibus quae, quia repudiandae sint ex ipsa pariatur praesentium. Vitae nostrum quos dignissimos necessitatibus unde hic assumenda nulla est voluptatibus.
    Dolorum provident eos dicta alias laboriosam vero velit tenetur, praesentium tempora? Magnam tempora, fugiat architecto numquam reprehenderit minus debitis, hic necessitatibus deserunt voluptatem laborum quisquam assumenda cumque inventore mollitia facere!`;

    const description = textMock.slice(0, character.id * 100)

    return (
        <li className='flex flex-col justify-between'>
            <Image
                width={300}
                height={300}
                src={character.image}
                alt={character.name}
                className='size-full object-contain'
                loading="eager" />
            <div>
                <div className='py-1 line-clamp-3'>
                    {description}
                </div>
                <div className='flex items-center justify-between text-xl'>
                    {character.name}
                    <div className='flex items-center'>
                        <button
                            className='cursor-pointer'
                            onClick={(e) => {
                                e.preventDefault();
                                toggleLike(character.id);
                            }}>
                            <Like width={60} height={60} isLiked={isLiked}></Like>
                        </button>
                        <button className='cursor-pointer'
                            onClick={(e) => {
                                e.preventDefault();
                                removeProduct(character.id);
                            }}>
                            <Delete width={30} height={30}></Delete>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProductItem