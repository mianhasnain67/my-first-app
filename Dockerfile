# Step 1: Base image select karein (Lightweight Linux + Node.js runtime)
FROM node:18-alpine

# Step 2: Container ke andar working directory set karein
WORKDIR /app

# Step 3: Dependencies list copy karein
COPY package*.json ./

# Step 4: Sirf production dependencies install karein
RUN npm install --production

# Step 5: Baqi bacha hua application code copy karein
COPY . .

# Step 6: Document karein ke application port 5000 use karegi
EXPOSE 5000

# Step 7: Container start hone par chalne wali command
CMD ["node", "server.js"]