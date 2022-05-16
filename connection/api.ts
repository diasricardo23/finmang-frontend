import axios from './axios';
import { GET_BANKS, GET_BANKS_BY_USER, GET_CATEGORIES, GET_CATEGORIES_BY_USER } from './routes';


// ----------------- BANKS API -----------------
export const getAllBanks = () => {
    return GET(GET_BANKS, {})
        .then((response: any) => {
            if(response.status === 200) {
                return response.data;
            }
            return null;
        })
        .catch((error: any) => {
            console.log('error', error);
            return null;
        });
}

export const getBankById = (id: any) => {
    return GET(GET_BANKS + id, {})
        .then((response: any) => {
            if(response.status === 200) {
                return response.data;
            }
            return null;
        })
        .catch((error: any) => {
            console.log('error', error);
            return null;
        });
}

export const getBanksByUserId = (id: number) => {
    return GET(GET_BANKS_BY_USER + id, {})
        .then((response: any) => {
            if(response.status === 200) {
                return response.data;
            }
            return null;
        })
        .catch((error: any) => {
            console.log('error', error);
            return null;
        });
}

export const createBank = (bank: any) => {
    const data = JSON.stringify(bank);
    
    return POST(GET_BANKS, data)
        .then((response: any) => {
            if(response.status === 200) {
                return response.data;
            }
            return null;
        })
        .catch((error: any) => {
            console.log('error', error);
            return null;
        });
}

export const updateBank = (bank: any) => {
    const data = JSON.stringify(bank);
    
    return PUT(GET_BANKS + bank.id, data)
        .then((response: any) => {
            if(response.status === 200) {
                return response.data;
            }
            return null;
        })
        .catch((error: any) => {
            console.log('error', error);
            return null;
        });
}

export const deleteBank = (id: number) => {
    // const data = JSON.stringify(bank);
    
    return DELETE(GET_BANKS + id, {})
        .then((response: any) => {
            if(response.status === 200) {
                return response.data;
            }
            return null;
        })
        .catch((error: any) => {
            console.log('error', error);
            return null;
        });
}

// ----------------- CATEGORIES API -----------------
export const getAllCategories = () => {
    return GET(GET_CATEGORIES, {})
        .then((response: any) => {
            if(response.status === 200) {
                return response.data;
            }
            return null;
        })
        .catch((error: any) => {
            console.log('error', error);
            return null;
        });
}

export const getCategoryById = (id: any) => {
    return GET(GET_CATEGORIES + id, {})
        .then((response: any) => {
            if(response.status === 200) {
                return response.data;
            }
            return null;
        })
        .catch((error: any) => {
            console.log('error', error);
            return null;
        });
}

export const getCategoriesByUserId = (id: number) => {
    return GET(GET_CATEGORIES_BY_USER + id, {})
        .then((response: any) => {
            if(response.status === 200) {
                return response.data;
            }
            return null;
        })
        .catch((error: any) => {
            console.log('error', error);
            return null;
        });
}

export const createCategory = (category: any) => {
    const data = JSON.stringify(category);
    
    return POST(GET_CATEGORIES, data)
        .then((response: any) => {
            if(response.status === 200) {
                return response.data;
            }
            return null;
        })
        .catch((error: any) => {
            console.log('error', error);
            return null;
        });
}

export const updateCategory = (category: any) => {
    const data = JSON.stringify(category);
    
    return PUT(GET_CATEGORIES + category.id, data)
        .then((response: any) => {
            if(response.status === 200) {
                return response.data;
            }
            return null;
        })
        .catch((error: any) => {
            console.log('error', error);
            return null;
        });
}

export const deleteCategory = (id: number) => {
    // const data = JSON.stringify(bank);
    
    return DELETE(GET_CATEGORIES + id, {})
        .then((response: any) => {
            if(response.status === 200) {
                return response.data;
            }
            return null;
        })
        .catch((error: any) => {
            console.log('error', error);
            return null;
        });
}

// ----------------- METHODS -----------------
const GET = (url: any, params: any) => {
    console.log('[GET]', url, params);
    return axios.get(url, params);
}

const POST = (url: any, params: any) => {
    console.log('[POST]', url, params);
    return axios.post(url, params);
}

const PUT = (url: any, params: any) => {
    console.log('[PUT]', url + '/', params);
    return axios.put(url + '/', params);
}

const DELETE = (url: any, params: any) => {
    console.log('[DELETE]', url + '/', params);
    return axios.delete(url + '/', params);
}