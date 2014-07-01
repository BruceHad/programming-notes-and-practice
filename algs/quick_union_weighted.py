class QuickUnion:
    id = []
    sz = []
    def __init__(self, n):
        self.n = n
        for i in range(n):
            self.id.append(i)
            self.sz.append(1)
    def root(self, i):
        while(i != self.id[i]): i = self.id[i]
        return i
    def connected(self, p, q):
        return self.root(p) == self.root(q)
    def union(self, p, q):
        rootp = self.root(p)
        rootq = self.root(q)
        if(rootp == rootq): return
        if(self.sz[rootp] < self.sz[rootq]):
            self.id[rootp] = rootq
            self.sz[rootq] += self.sz[rootp]
        else:
            self.id[rootq] = rootp
            self.sz[rootp] += self.sz[rootq]

if __name__ == "__main__":
    x = QuickUnion(5)
    print(x.id)
    print(x.connected(0, 4))
    x.union(0,4)
    print(x.connected(0, 4))
    x.union(1,2)
    x.union(2,4)
    print(x.connected(0,1))
    print(x.id)