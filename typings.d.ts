interface Base {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string,
    _updatedAt: string;
}

interface Listing extends Base {
    author: AuthStoreOptions;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
    path: Geopoint[] ;
}

interface Services extends Base {
    title: string;
    description: string;
    mainImage: Image;
    tags: Tags;
}

interface Tags extends Base {
    _type: string;
    title: string;
}



export interface PageInfo extends Base {
    _type: "pageInfo";
    address: string,
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}
export interface BulletSection extends Base {
    _type: "bulletSection";
    description: string;
    mainImage: Image;
    title: string;
}

export interface Social extends Base {
    _type: "social";
    title: string;
    url: string;
}


interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference"
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;

}

interface Geopoint extends Base {
    _type: geopoint;
    lat: number;
    lng: number;
    alt: number;
}

interface Category extends Base {
    description: string;
    title: string;
}

interface MainImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}