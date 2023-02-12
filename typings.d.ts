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



// interface Image {
//     _type: "image";
//     asset: {
//         _ref: string;
//         _type: "reference";
//     }
// }

// export interface PageInfo extends SanityBody {
//     _type: "pageInfo";
//     address: string,
//     backgroundInformation: string;
//     email: string;
//     role: string;
//     heroImage: Image;
//     name: string;
//     phoneNumber: string;
//     profilePic: Image;
// }

// export interface Technology extends SanityBody {
//     _type: "skill";
//     image: Image;
//     title: string;
// }

// export interface Skill extends SanityBody {
//     _type: "skill";
//     image: Image;
//     title: string;
// }

// export interface Project extends SanityBody {
//     title: string;
//     _type: "project";
//     image: Image;
//     linkToBuild: string;
//     linkToView: string;
//     summary: string;
//     technologies: Technology[]
// }

// export interface Experience extends SanityBody {
//     _type: "experience";
//     company: string;
//     companyImage: Image;
//     dateStarted: date;
//     dateEnded: date;
//     isCurrentlyWorkingHere: boolean;
//     jobTitle: string;
//     points: string[];
//     technologies: Technology[];
// }

// export interface Social extends SanityBody {
//     _type: "social";
//     title: string;
//     _id: string;
//     url: string;
// }