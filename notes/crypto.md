#Notes on The Diffie Helman Exchange
##Bit of Background

Way back in 1976 two american academics, Whit Diffie and Martin Helman, published a paper called New Directions in Cryptography. This paper was the first to bring encryption and secrets codes into the public sphere. Prior to that this field had been pretty much exclusively government and military, spies and espionage. In fact, the British GCHQ had published similar work years earlier, but the work had been classified and kept secret until 1997. Diffie and Helman's paper included a method of securely exchanging cryptographic keys, over insecure communication channels. and the DH key exchange method is now used in a variety of cryptographic protocols.

There are a lot of big words there that I don't really understand. But in layman's terms:

    Encryption is the process of encoding or scrambling text (or data) so that it can't be read (unless you know the secret). The original message is know as plain text while the scrambled text is known as cipher text.
    A key is a bit of data that is used in the encryption process. Just like a physical key, an encryption key is used to lock (encrypt) and to unlock (decrypt). If the same key can both encrypt and decrypt the text, then it is known as a symetric key.

So, in theory, the encrypted data (cipher text) can only be read if you have the key. A big problem is that someone might get hold of your key and therefore be able to read all your data. If you meet someone in person, you can whisper in their ear. But if you are communicating over the internet, you have to use something like the Diffie Helman exchange, because the D-H Exchange makes it possible for two parties who share no secret information to generate a mutual secret key.
How the Exchange Works

In Public Key cryptography, you have a key that is completely public. You don't care who has it, because it alone isn't enough to decrypt your data. For that you also need a private key.

A DH Exchange between two people (Alice and Bob) requires them first to agree on some base data:

* The Generator (g)
* A Safe Prime Number (p)

They then choose (or generate) a private key (a and b). The private key should be ['at least 256-bit random number'][2]. i.e. a very big random number.

With g and p agreed, and the private key chosen, Bob and Alice can both generate their public keys (A and B). A = g**a mod p B = g**b mod p The nature of this equation makes it very difficult (if appropriate values are chosen) for any hacker to solve to determine values for the private a keys. This is known as the [discrete logarithm problem][3].
Bob and Alice can swap these public keys, not really worrying if someone else gets hold of them.
Then they can generate a new value, this is the shared secret (s). s = g**B mod p s = g**A mod p 

## N.S.A. Able to Foil Basic Safeguards of Privacy on Web

>> 'The National Security Agency is winning its long-running secret war on encryption, using supercomputers, technical trickery, court orders and behind-the-scenes persuasion to undermine the major tools protecting the privacy of everyday communications in the Internet age, according to newly disclosed documents.'

So having apparently lost the legal battle to control encryption, the NSA carried on regardless. The article states: "[The NSA] began collaborating with technology companies in the United States and abroad to build entry points into their products" but it's not clear to me if the encryption protocols (rather than specific implementations) have been compromised. 

>> 'To keep such methods secret, the N.S.A. shares decrypted messages with other agencies only if the keys could have been acquired through legal means. “Approval to release to non-Sigint agencies,” a GCHQ document says, “will depend on there being a proven non-Sigint method of acquiring keys.”'

The NSA really thinks it's at war with everyone.

It's all very strange. Encryption is essential to secure communication across networks which is in turn essential for the economy. For a government agency to deliberately break that is incredible. The only analogy I can think of would be  destroying roads and bridges as a defence against enemy armies. As a short term tactic in wartime it might work, but the cost to the country, in times of peace, are massive.

URL: http://www.nytimes.com/2013/09/06/us/nsa-foils-much-internet-encryption.html?pagewanted=all

Discussion: https://news.ycombinator.com/item?id=6336178

## Keeping Secrets

How to keep things secret when everything is, by definition recorded, stored and transmitted on hundreds of computers, networks and systems that you are not even aware of, never mind trust, is a tough problem.

A lot of bright people have applied themselves to that problem and come up with a some very clever techniques that let people share information, relatively safe from eavesdropping. 

Like most people, I don't have a clue how these things work. I see a little padlock in my browser's address bar and the arcane 'HTTPS' and I trust that I'm safe. 

## The Diffie Helman Exchange

Up until the 1970s cryptography was still pretty much only used by government and the military.

Then in 1976 two academics, Whit Diffie and Martin Helman published _New Directions in Cryptography_, an attempted to solve the problem of key distribution, introduced Public Private Key cryptography into the public sphere.

The Diffie-Helman exchange went a long way to solving the problem of sharing a secret across a public network, where all communication are potentially monitored. 

It worked like so:

The two sides agree some base values: a generator and a (safe) prime number. 

Each side decides on/generates their own _private_ key. This key is never shared with anyone else.

The generator value, prime and private key are used to generate a new value. This is known as the public key as it can be shared freely without compromising the security.

Once the public keys have been exchanged, each side can use the public key and the private key to generate a shared secret value. The maths means each side can generate the shared secret easily, but anyone monitoring the exchange would have great difficulty determining the shared secret without the private key. 

### DH Exchange in JS

The math behind the DH exchange usually takes the form:

    A = g**x mod p

Where g is a real number (often 2) and p is a 'safe' prime number. Both of these are considered public. x is a real number, usually quite large and generated randomly. This is kept private. 

e.g
    A = 2**4112143653 mod 7919

This is just for demonstration purposes. I don't want to have to handle large integers and computational efficiency at the moment. Therefore x and p will be limited to 2 digits.

e.g. 

    A = 2**99 mod 11

The code for the DH exchange therefore looks something like this:


## App.

### Safe Primes

5, 7, 11, 23, 47, 59, 83, 107, 167, 179, 227, 263, 347, 359, 383, 467, 479, 503, 563, 587, 719, 839, 863, 887, 983, 1019, 1187, 1283, 1307, 1319, 1367, 1439, 1487, 1523, 1619, 1823, 1907, 2027, 2039, 2063, 2099, 2207, 2447, 2459, 2579, 2819, 2879, 2903

[ref][1]

[1]: http://oeis.org/A005385

    from random import getrandbits

    """
    g = 2
    prime = 7919

    a = getrandbits(32)
    b = getrandbits(32)
    print a, b

    A = pow(g, a, prime)
    B = pow(g, b, prime)
    print A, B

    s1 = pow(A, b, prime)
    s2 = pow(B, a, prime)
    print s1, s2
    """

    p = 11
    g = 2

    a = 99
    b = 73

    A = pow(g, a, p);
    B = pow(g, b, p);
    print A, B

    s1 = pow(B, a, p);
    s2 = pow(A, b, p);

    print s1, s2