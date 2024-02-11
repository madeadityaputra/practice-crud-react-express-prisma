import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (req, res) => {
	try {
		const response = await prisma.product.findMany();
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getProductById = async (req, res) => {
	try {
		const response = await prisma.product.findUnique({
			where: {
				id: Number(req.params.id),
			},
		});
		//* 200 adalah success
		res.status(200).json(response);
	} catch (error) {
		//* 404 adalah not found
		res.status(404).json({ msg: error.message });
	}
};

export const createProduct = async (req, res) => {
	const { name, price } = req.body;
	try {
		const product = await prisma.product.create({
			data: {
				name: name,
				price: price,
			},
		});
		//* 201 adalah created (telah di buat)
		res.status(201).json(product);
	} catch (error) {
		//* 400 adalah bad request
		res.status(400).json({ msg: error.message });
	}
};

export const updateProduct = async (req, res) => {
	const { name, price } = req.body;
	try {
		const product = await prisma.product.update({
			where: {
				id: Number(req.params.id),
			},
			data: {
				name: name,
				price: price,
			},
		});
		//* 201 adalah created (telah di buat)
		res.status(200).json(product);
	} catch (error) {
		//* 400 adalah bad request
		res.status(400).json({ msg: error.message });
	}
};
export const deleteProduct = async (req, res) => {
	try {
		const product = await prisma.product.delete({
			where: {
				id: Number(req.params.id),
			},
		});
		//* 201 adalah created (telah di buat)
		res.status(200).json(product);
	} catch (error) {
		//* 400 adalah bad request
		res.status(400).json({ msg: error.message });
	}
};
