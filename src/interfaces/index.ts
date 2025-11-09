export interface OriginLocation {
    name: string;
    url: string;
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginLocation;
    location: OriginLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface StoreState {
    products: Character[];
    favorites: number[];
    isLoading: boolean;
    error: Error | string | null;
    fetchData: (api: string) => void;
    toggleLike: (id: number) => void;
    addProduct: (formData: Character) => void;
    removeProduct: (id: number) => void;
}

export interface ProductItemProps {
    character: Character;
}
export interface ProductDetailsClientProps {
    productId: string;
}
export interface LikeProps {
    width: number;
    height: number;
    isLiked: boolean;
}