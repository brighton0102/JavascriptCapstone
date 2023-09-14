
export async function fetchAllReservations(itemId) {
    try {
        const apiKey = 'fDqwhSI3IFsJVLYNBHB6';
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/reservations?item_id=${itemId}`);

        if (!response.ok) {
            throw new Error('Failed to fetch reservations');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching reservations:', error);
        return [];
    }
}
