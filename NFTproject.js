//we have created an array which will store information related to NFT
let nftCollection = [];

//Function to create object of NFt and put it into array named nftCollection
function mintNFT(name, fathername, dateCreated, description, adress)
{
    
    const nft = {
        name: name,
        fathername: fathername,
        dateCreated: dateCreated,
        description: description,
        adress: adress
    };
    
    nftCollection.push(nft);
    console.log(`We have Minted NFT: ${name}`);
}


//function to print the details we have provided for each NFT stored in the Array nftCollection
function listNFTs()
 {
    for(let i=0;i<nftCollection.length;i++)
        {
            let nft = nftCollection[i];
            console.log(`NFT ${i + 1}:`);
            console.log(`Name: ${nft.name}`);
            console.log(`Father Name: ${nft.fathername}`);
            console.log(`Date Created: ${nft.dateCreated}`);
            console.log(`Description: ${nft.description}`);
            console.log(`Adress: ${nft.adress}`);
            console.log('---------------------------');
        }
    
    };


//Function to get the total number of NFt we have added in the nftCollection array
function getTotalSupply() {
    console.log(`Total Supply: ${nftCollection.length}`);
}

//to Create a nft we have to use function mintNFT
mintNFT('GURJOT SINGH', 'HIMAT SINGH', '30 MAY', 'A portrait of a woman.','VILLAGE=SHAHPUR PUNJAB INDIA');
mintNFT('JAGJOT SINGH', 'JARNAIL SINGH', '31 MAY', 'A nature painting.','VILLAGE=MAVI PUNJAB INDIA');
mintNFT('ROHANIYAT KAUR', 'HARKIRAT SINGH', '14 APRIL', 'A Scene of rain','village-Rampur Punjab India');
mintNFT('JAIVEER', 'JOBAN SINGH', '18 APRIL', 'A Scene of TREE and car','village-rajaPur Punjab India');

//to print the details of all the NFTs
listNFTs();

//to get total no of NFTs minted by us
getTotalSupply();
//code by gurjot singh 22bcs14842