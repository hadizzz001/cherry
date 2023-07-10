 

export async function fetchTemp() { 

const response = await fetch('http://localhost:3000/api/blog' );

    const result = await response.json();

    return result.posts;
}

export async function fetchTemp1() { 

const response = await fetch('http://localhost:3000/api/blogs' );

    const result = await response.json();

    return result.posts;
}
 