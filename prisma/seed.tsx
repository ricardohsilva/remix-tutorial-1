import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();


async function seed() {
    await Promise.all(
        getToys().map(async toy => {
            await db.toy.create({ data: toy })
        })
    );

    await Promise.all(
        getImages().map(async image => {
            await db.image.create({ data: image })
        })
    );
}

seed();

function getToys() {
    const toys: any[] = [
        {
            id: 1,
            name: 'Baby Yoda',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            name: 'LEGO Head',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 3,
            name: 'Robot',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 4,
            name: 'Stormtrooper',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
    ]
    return toys
}

function getImages() {
    const images: any[] = [
        {
            imageSrc: "https://images.unsplash.com/photo-1611250535839-94b88cf88bba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
            toyId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80",
            toyId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://images.unsplash.com/photo-1621031717192-d69632d7daaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
            toyId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://images.unsplash.com/photo-1531061682486-1fa5a7390f74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80",
            toyId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://images.unsplash.com/photo-1484824823018-c36f00489002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            toyId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
            toyId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]
    return images
}