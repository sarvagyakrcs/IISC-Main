function generateFID(userEnteredNumber) {
    // Get the current date in YYYYMMDD format
    const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    // Convert the userEnteredNumber to a 6-digit string
    const formattedNumber = String(userEnteredNumber).padStart(6, '0').slice(0, 6);
    // Concatenate the current date and the formatted number
    const fid = currentDate + formattedNumber;
    // Convert the FID to an integer
    const fidAsInteger = parseInt(fid, 10);
    return fidAsInteger;
}

export default generateFID;