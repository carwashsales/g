'use server';
/**
 * @fileOverview AI-powered quote generator flow.
 *
 * - generateTailoredQuote - A function that generates a tailored quote for the client.
 * - GenerateTailoredQuoteInput - The input type for the generateTailoredQuote function.
 * - GenerateTailoredQuoteOutput - The return type for the generateTailoredQuote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTailoredQuoteInputSchema = z.object({
  serviceCategory: z
    .string()
    .describe('The category of cleaning service requested (e.g., house cleaning, office cleaning).'),
  spaceSize: z
    .enum(['small', 'medium', 'large'])
    .describe('The approximate size of the space to be cleaned.'),
  serviceLevel: z
    .enum(['quick', 'standard', 'deep'])
    .describe('The desired level of cleaning service (quick, standard, or deep).'),
});
export type GenerateTailoredQuoteInput = z.infer<typeof GenerateTailoredQuoteInputSchema>;

const GenerateTailoredQuoteOutputSchema = z.object({
  quote: z.string().describe('The tailored quote for the cleaning service.'),
});
export type GenerateTailoredQuoteOutput = z.infer<typeof GenerateTailoredQuoteOutputSchema>;

export async function generateTailoredQuote(input: GenerateTailoredQuoteInput): Promise<GenerateTailoredQuoteOutput> {
  return generateTailoredQuoteFlow(input);
}

const priceMultipliers = {
    small: {quick: 1, standard: 1.5, deep: 2},
    medium: {quick: 1.5, standard: 2, deep: 2.5},
    large: {quick: 2, standard: 2.5, deep: 3},
  };

const calculateQuote = ai.defineTool(
    {
      name: 'calculateQuote',
      description: 'Calculates the quote based on service category, space size, and service level.',
      inputSchema: GenerateTailoredQuoteInputSchema,
      outputSchema: z.number(),
    },
    async (input) => {
      const {serviceCategory, spaceSize, serviceLevel} = input;
      // A more sophisticated implementation might fetch base prices from a database
      // based on the service category.
      const basePrice = 50;  // Example base price
      // Look up the price multiplier
      const multiplier = priceMultipliers[spaceSize][serviceLevel];
      const quote = basePrice * multiplier;
      return quote;
    }
  );

const quotePrompt = ai.definePrompt({
  name: 'quotePrompt',
  tools: [calculateQuote],
  input: {schema: GenerateTailoredQuoteInputSchema},
  output: {schema: GenerateTailoredQuoteOutputSchema},
  prompt: `You are a helpful AI that provides tailored quotes for cleaning services.

  Based on the service category, space size, and desired service level, generate a quote for the customer.
  Use the calculateQuote tool to determine the price.

  Service Category: {{{serviceCategory}}}
  Space Size: {{{spaceSize}}}
  Service Level: {{{serviceLevel}}}

  Present the quote in a friendly and professional manner.
`,
});

const generateTailoredQuoteFlow = ai.defineFlow(
  {
    name: 'generateTailoredQuoteFlow',
    inputSchema: GenerateTailoredQuoteInputSchema,
    outputSchema: GenerateTailoredQuoteOutputSchema,
  },
  async input => {
    const {output} = await quotePrompt(input);
    return output!;
  }
);
